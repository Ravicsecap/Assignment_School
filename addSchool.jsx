
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

const AddSchool = () => {
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      // Send data to the server to add to MySQL
      const response = await axios.post('/api/addSchool', data);
      console.log(response.data);
    } catch (error) {
      setErrorMessage('Error adding school. Please try again.');
    }
  };

  return (
    <div>
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Add form fields with validation */}
        <input type="text" name="name" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}

        {/* Add other form fields with validation */}
        
        {/* Example: */}
        <input type="email" name="email_id" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email_id && <span>Invalid email address</span>}

        {/* Add image upload field */}
        <input type="file" name="image" ref={register({ required: true })} />
        {errors.image && <span>This field is required</span>}

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default AddSchool;
