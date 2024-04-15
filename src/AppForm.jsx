import React, { useState } from 'react';

export default function AppForm() {
    const [form, setForm] = useState({name:"", email:""});
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e)=>{
      const {name, value} = e.target;
      setForm({...form, [name]: value});

      console.log(name);
  }
  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor='name'>이름:</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange}/>
          <label htmlFor='email'>이메일:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange}/>
          <button>Submit</button>
      </form>
  );
}
