const userModel = require('../models/user.model')

const getSigin = (req,res)=>{
    res.render('index')
}

const registerUser = (req,res)=>{
    let form = new userModel(req.body)
    form.save()
    res.redirect('/user/')
}

const getRegisterUser = (req,res)=>{
    userModel.find((err,result)=>{
        if (err){
            res.send({message:'error occured'})
        }else{
            res.render('todo',{todo : result})
        }
    })
}

const deleteUser =(req,res)=>{
    userModel.deleteOne({_id:req.body.id},(err)=>{
        if(err){
            res.send({message:'error occured while deleting'})
        }
        else{
        res.redirect('/user/todo')            
        }
    })
}

const editUser =(req,res)=>{
    userModel.find({_id:req.body.id},(err,result)=>{
        if(err){
            console.log(err)
            console.log(`error occured`)
        }
        else{
            res.render('edit',{todo:result})
        }
    })
}

const updateUser =(req,res)=>{
    let newDetails = req.body;
    let id = req.body.id;
    userModel.findByIdAndUpdate(id,newDetails,(err,response)=>{
        if(err){
            console.log('Error')
        }
        else{
            console.log(response)
            res.redirect('todo')
        }
    })
}

module.exports = {getSigin,registerUser,getRegisterUser,deleteUser,editUser,updateUser}