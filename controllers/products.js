const getAllProducts = async(req,res) => {
    res.status(200).json({msg : "All Products"})
};

const getAllProductsTesting = async(req,res) => {
    res.status(200).json({msg : "All ProductsTesting"})
};
module.exports={getAllProducts,getAllProductsTesting}