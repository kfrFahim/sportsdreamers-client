import React, { useContext } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {

     const {user} = useContext(AuthContext)

     const [axiosSecure] = useAxiosSecure();
     const { register, handleSubmit, reset } = useForm();
     const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
     
     const onSubmit = data => {

        
          const formData = new FormData();
          
          formData.append('image', data.image[0])
  
          fetch(img_hosting_url, {
              method: 'POST',
              body: formData
          })
          .then(res => res.json())
          .then(imgResponse => {
               console.log(imgResponse);
              if(imgResponse.success){
                  const imgURL = imgResponse.data.display_url;
                  const {name, price, available_seats, instructor_name,instructor_email} = data;
                  const newItem = {name, price: parseFloat(price), available_seats, instructor_name,instructor_email, image:imgURL , status:"pending", enrolledStudents : 0, feedback: "" }
                  console.log(newItem)
                  axiosSecure.post('/newclasses', newItem)
                  .then(data => {
                      console.log('after posting new menu item', data.data)
                      if(data.data.insertedId){
                          reset();
                          Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Item added successfully',
                              showConfirmButton: false,
                              timer: 1500
                            })
                      }
                  })
              }
          })
  
      };

     return (
          <div className='w-full'>
               <SectionTitle heading="Add Class"></SectionTitle>

               <div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                <div className="form-control my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>


                <div className="flex gap-5 my-4">
                    <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor name*</span>
                    </label>
                    <input type="text" placeholder="Instructor name" readOnly 
                    defaultValue={user.displayName}
                        {...register("instructor_name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                    <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="text" placeholder="Instructor Email" readOnly
                    defaultValue={user.email}
                        {...register("instructor_email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
 
                </div>
                <div className='flex gap-5 my-4'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available seats*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("available_seats", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
          
                <div className='flex justify-center'>
                <input className="btn btn-success my-4" type="submit" value="Add Class" />
                </div>
            </form>
        </div>


          </div>
     );
};

export default AddClass;