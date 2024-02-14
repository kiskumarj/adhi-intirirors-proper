const express = require('express')
const database = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express()
const cors = require('cors');
const multer = require('multer')
const Product = require('./model/Product')
const { category, subcategory, warranty } = require('./model/category')
const { ask, book } = require('./model/ask')
const bodyprs = require('body-parser')
const bcrypt = require('bcrypt');
const path = require('path')
const { default: mongoose } = require('mongoose')
const Inquiry = require('./model/order');
app.use(bodyprs.json())
app.use(cors())
app.use(express.json())
app.use(express.static('publuc'))
require('dotenv').config()
const jwtSecretKey = 'adhiinteriors12####b2jwtstoken' ;
app.listen(5000, (err) => {
  if (err) {
    console.error(`Port 5000 is already in use.`);
  } else {
    console.log(`Server is running on port 5000`);
  }
})
database.connect('mongodb://127.0.0.1:27017/form?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const newuser = new database.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,

  },
  conformpassword: {
    type: String,
    required: false,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,


  },
});
const user = database.model('users', newuser)

app.post('/signup', async (req, res) => {
  const { email, username, password, conformpassword } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Check if the password and conformpassword match
    if (password !== conformpassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const me =  user({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    // Save the user to the database
    await me.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by email
  const foundUser = await user.findOne({ username });

  if (!foundUser) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Check if the provided password matches the hashed password
  const isPasswordValid = await bcrypt.compare(password, foundUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: foundUser._id }, jwtSecretKey, { expiresIn: '1h' });

  res.json({ token });
});
app.get('/protected', (req, res) => {
  // Middleware to verify the JWT token
  const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      req.userId = decoded.userId;
      next();
    });
  };

  // Use the middleware for protection
  verifyToken(req, res, () => {
    res.json({ message: 'Protected route accessed successfully' });
  });
});

app.post('/logout', (req, res) => {
  // Middleware to verify the JWT token
  const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      req.userId = decoded.userId;
      next();
    });
  };
  verifyToken(req, res, () => {
    res.status(200).json({ message: 'Logout successful' });
  });
})
//product-creation-oprations...
app.post('/product', (req, res) => {

  const {
    modelno,
    madeupof,
    warrantyId,
    categoryId,
    subcategoryId,
    addimage,
    dimentions

  } = req.body;
  if (!modelno || !madeupof || !warrantyId || !categoryId || !subcategoryId || !addimage || !dimentions) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {

    const newProduct = new Product({
      modelno,
      madeupof,
      warrantyId,
      categoryId,
      subcategoryId,
      addimage,
      dimentions

    });

    newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Product creation failed' });
  }


})
// POST route to create a new category
app.post('/categories', async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new category({ name });
    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully' });
  } catch (error) {   
    console.error(error);
    res.status(500).json({ error: 'Error creating category' });
  }
});
// POST route...
app.post('/subcategories', async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const newSubcategory = new subcategory({ name, categoryId });
    await newSubcategory.save();
    res.status(201).json({ message: 'Subcategory created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating subcategory' });
  }
});
// get routes...
app.get('/categories', async (req, res) => {

  try {
    const categories = await category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching categories' });
  }
});
app.get('/subcategories', async (req, res) => {
  try {
    const subcategories = await subcategory.find({}, "name");
    res.json(subcategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching warranties' });
  }
})
app.get('/warranty', async (req, res) => {
  try {
    const warranties = await warranty.find();
    res.json(warranties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching subcategory' });
  }
})
app.get('/products/category/office', async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const products = await Product.find({ categoryId: '652290de7919a078826d08c8' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//file middleware.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'publuc/image');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
upload.fields([{ name: 'image', maxCount: 1 }])

const Image = mongoose.model('Image', { filename: String, path: String });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ message: "please select file..." })

    }
    const newImage = new Image({ filename: req.file.filename, path: req.file.path });
    await newImage.save().then(() => res.status(200).json({ filename: req.file.path }));


  } catch (err) {
    console.error(err)
    res.status(404).json({ error: 'image is not uploaded' })
  }
});
app.get('/uploads', async (req, res) => {
  try {
    const getpath = await Image.find({}, 'filename');
    res.status(200).json(getpath);

  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/postask', async (req, res) => {
  const { name, phone, gmail } = req.body
  if (!name || !phone || !gmail) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const asking = new ask({
      name, phone, gmail 
    })
    asking.save()
    res.status(200).send('saved successfully')
  } catch (error) {
    console.error('error asking team', error)
    res.status(400).send('Internel server error')
  }
})
app.get('/getasks', async (req, res) => {
  try {
    // Fetch all questions from the database
    const questions = await ask.find();

    // Return the questions in the response
    res.status(200).json( questions );
  } catch (error) {
    console.error('Error fetching questions', error);
    res.status(500).send('Internal server error');
  }
});

//officecat
app.get('/products/category/:6522909a7919a078826d08c2', async (req, res) => {

  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ categoryId: '6522909a7919a078826d08c2' })

      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//counts
app.get('/productCount', async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/orderCount', async (req, res) => {
  try {
    const count = await Inquiry.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/askCount', async (req, res) => {
  try {
    const count = await ask.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/bookCount', async (req, res) => {
  try {
    const count = await book.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//counts..

//mshomesofa
app.get('/products/most-sell/ps:65a23b5fa48cc0053c481640', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a23b5fa48cc0053c481640' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//mshomeprebed
app.get('/products/most-sell/pb:65a308c9f1b2a735b717cc6e', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a308c9f1b2a735b717cc6e' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//tvcase
app.get('/products/most-sell/tv:65a31015e082b4eb1af5154e', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a31015e082b4eb1af5154e' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//studentpro
app.get('/products/most-sell/sp:65a3102ce082b4eb1af51550', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a3102ce082b4eb1af51550' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//prechair
app.get('/products/most-sell/pc:65a3104be082b4eb1af51552', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a3104be082b4eb1af51552' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//workstation 
app.get('/products/most-sell/wsc:65a3107ee082b4eb1af51554', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a3107ee082b4eb1af51554' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//mstable
app.get('/products/most-sell/mst:65a3108be082b4eb1af51556', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a3108be082b4eb1af51556' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//storeage
app.get('/products/most-sell/sst:65a310a8e082b4eb1af51558', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ subcategoryId: '65a310a8e082b4eb1af51558' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//maincategory gets..
//..............................................................................................//
//sofa
app.get('/products/sofa/so:6522909a7919a078826d08c2', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ categoryId: '6522909a7919a078826d08c2' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//homefurniture
app.get('/products/sofa/hf:652290ad7919a078826d08c4', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ categoryId: '652290ad7919a078826d08c4' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//hotel
app.get('/products/sofa/ht:652290c17919a078826d08c6', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ categoryId: '652290c17919a078826d08c6' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//edu
app.get('/products/sofa/ed:652291257919a078826d08cc', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ categoryId: '652291257919a078826d08cc' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//outdoor 
app.get('/products/sofa/od:652291127919a078826d08ca', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ categoryId: '652291127919a078826d08ca' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//metaltable
app.get('/products/sofa/mt:6527da3074f1568ba858f9e9', async (req, res) => {
  const categoryId = req.params.categoryId;


  try {
    const products = await Product.find({ categoryId: '6527da3074f1568ba858f9e9' })
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});
//end of gets for cat 
app.post('/bookings', async (req, res) => {
  try {
    const { name, phoneNumber, city, email, description } = req.body;
    if (!name || !phoneNumber || !email || !city || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new booking instance
    const newBooking = new book({
      name,
      phoneNumber,
      city,
      email,
      description,
    });

    // Save the booking to the database
    await newBooking.save();

    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getcustomerrequests', async (req, res) => {
  try {
    // Fetch all bookings from the database
    const bookings = await book.find();

    // Return the bookings in the response
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId
    const singleprod = await Product.findById(productId)
      .populate("categoryId")
      .populate("warrantyId")
      .populate("subcategoryId")
      .exec()
    res.json(singleprod)

  } catch (error) {
    console.error('error getting product', error)
  }
})
app.post('/submit-inquiry', async (req, res) => {
  try {
    const { modelNumber, subcategory, customerDetails } = req.body;

    // Save the inquiry to the database
    const inquiry = new Inquiry({
      modelNumber,
      subcategory,
      customerDetails,
      createAt: new Date()
    });

    await inquiry.save();

    res.status(200).json({ message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
//edit prod
app.put('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;

    // Validate productId before using it
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid productId' });
    }

    // Find the product by ID and update its details
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Send the updated product data as a JSON response
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
//delete
app.delete('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;

    // Validate productId before using it
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid productId' });
    }

    // Find the product by ID and remove it from the database
    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Send a success message as a JSON response
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
app.patch('/customer-requests/:id', async (req, res) => {
  try {
    const requestId = req.params.id;
    const updatedRequest = await Inquiry.findByIdAndUpdate(
      requestId,
      { seen: true },
      { new: true } // Returns the updated document
    );

    if (!updatedRequest) {
      return res.status(404).json({ error: 'Customer request not found' });
    }

    res.json(updatedRequest);
  } catch (error) {
    console.error('Error updating customer request:', error);
    res.status(500).json({ error: 'Error updating customer request' });
  }
});
app.get('/get-inquiries', async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
//get to fetch all product 
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find()
      .populate('warrantyId') 
      .populate('categoryId') 
      .populate('subcategoryId'); 

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching products' });
  }
});
