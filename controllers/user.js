const User = require("../models/user.js");

module.exports.renderSignupForm =  (req, res) =>{
    res.render("users/signup");
}
module.exports.signup = async (req, res, next) =>{
    try{
        let {username , email , password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome To Vistada");
            res.redirect("/listings");
        })
    }catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    };
}
module.exports.renderLoginForm =  (req, res) =>{
    res.render("users/login");
}

module.exports.login = async (req, res) =>{
    req.flash("success","Welcome back to Vistada!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) =>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You are loged out!");
        res.redirect("/listings");
    })
}