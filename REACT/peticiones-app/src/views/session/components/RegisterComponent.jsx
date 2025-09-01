import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../repositories/firebase/config'

const schema = yup.object({
  email: yup.string().email("Please enter a correct format: email@email.com").required(),
  password: yup.string().required().min(8,"Please enter a min 8 char")
  .matches(/[A-Z]/)
  .matches(/[a-z]/)
  .matches(/[0-9]/)
  .matches(/[!@#$%&*?.,_:<>"|]/),
  confirm_password: yup.string().oneOf([yup.ref("password")])
})


export const RegisterComponent = () => {
 const {register,handleSubmit} = useForm({
    resolver: yupResolver(schema)
 })

 /* const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.input_email.value);
    console.log(e.target.input_password.value);
    
    console.log(email);
    console.log(password);
  } */

  const onSubmitForm = (data) => {
    console.log(data);
    
    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.error(errorMessage);
    
    // ..
  });

  }

  return (
    <div>Register
    
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <label className="form-label" >Email: </label>
      <input type="email" className="form-control" name="input_email" {...register('email')} />
      <label className="form-label">Password: </label>
      <input type="password" className="form-control" name="input_password" {...register('password')}/>
      <label className="form-label">Confirm Password: </label>
      <input type="password" className="form-control" {...register('confirm_password')}/>
      <button type="submit">Send</button>
    </form>
    </div>
  )
}
