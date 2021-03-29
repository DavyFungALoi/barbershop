import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
      isBarber: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    { timestamps: true }
  );

  

  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }
  ///this. allows access to the password in the fields by adding a method to the schema, you can call this without importing it. it compares the entered password and the hashed dashboard.

  userSchema.pre("save", async function (next){
    if (!this.isModified('password')) {  ///checks if password has been changed, if password hasn't been changed this shouldn't run, it calls next to continue with doing stuff
      next()
    }
  
    const salt =  await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  })

  //generates a hashed password
  

  const User = mongoose.model("User", userSchema);

export default User;
