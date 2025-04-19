const hello = function(req,res,next){
    res.test = "hello"
	//console.log(req);
    next();
}

//console.log("我是中間程式1")

module.exports = hello;