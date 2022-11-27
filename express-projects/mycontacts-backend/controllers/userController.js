const User = require("./models/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
const { username, email, password } = req.body;
const date = new Date()

if (!username || !email || !password) {
res.status(400);
throw new Error("All fields are mandatory!");
}
const userAvailable = await User.findOne({ email });
if (userAvailable) {
res.status(400);
throw new Error("User already registered!");
}

bcrypt.hash(password, 10, (err, hash) => {
    if(err) {
        res.json ({
            error: err 
        })
    }
    let user = new User ({
        name: username,
        email: email,
        password: hash,
        timestamp: date
    })

    user.save()
    .then(result => {
        res.status(201).json ({
            message: 'User created Successfully',
            user: result
        })
    })
    .catch((err) => {
        res.json ({
            err
        })
    })

})
});

const loginUser = asyncHandler( async(req, res) => {
    let email = req.body.email
    let password = req.body.password

    if (!(email && password)) {
        res.status(400).send("All input is required");
      }

    User.findOne ({
        email
    }).then((user) => {
        if(user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.json ({
                        message: 'Error Occured'
                    })
                }
                if(result) {
                    
                    const token = jwt.sign(
                        { user_id: user._id, email },
                        process.env.TOKEN_KEY,
                        {
                          expiresIn: "2h",
                        }
                      );
                
                      // save user token
                      user.token = token;
                
                      // user
                      res.status(200).json(user);



                } else {
                    res.json ({
                        message: 'Login failed. password doesn\'t match' 
                    })
                }
            })
        } else {
            res.json ({
                message: 'User not found'
            })
        }
    })
    });

const currentUser = asyncHandler( async(req, res) => {

});

module.exports = {registerUser, loginUser, currentUser};


