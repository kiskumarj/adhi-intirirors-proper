const mongoose = require('mongoose');
//categoryschema//
const categorySchema = mongoose.Schema({
  name: {
      type: String,
      required: true,
  }
})
const category = mongoose.model('Category', categorySchema);
//subcategryschema//
const subCategorySchema = mongoose.Schema({
  name: {
      type: String,
      required: true,
      
  }

})
const subcategory = mongoose.model('SubCategory', subCategorySchema);
//warrantyschemma// 
const warrantyschema = mongoose.Schema({
  month: {
    type : String,
    required: true,
  },
  
}) 
const warranty = mongoose.model('warranty', warrantyschema)
module.exports={category,subcategory,warranty}
