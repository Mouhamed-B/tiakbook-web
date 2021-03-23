/*
* Form fields as component function to create any class based form
*
*/

import { Select } from "@material-ui/core";

function TextField({name, value, onChange, children}) {
    return (
      <div>
        <label htmlFor={name}>{children}</label>
        <input type='text' value={value} onChange={onChange} name={name} id={name} className='form-control'/>
      </div>
    );
}
  
function EmailField({value, onChange}) {
  return (
    <div>
      <label htmlFor='email'>E-mail</label>
      <input type='email' value={value} onChange={onChange} name='email' id='email' className='form-control'/>
    </div>
  )
}
  
function PasswordField({value, onChange}) {
  return (
    <div>
      <label htmlFor='password'>Mot de Passe</label>
      <input type='password' onChange={onChange} value={value} name='password' id='password' className='form-control'/>
    </div>
  )
}

function SelectField({value, onChange, name, options, children}) {
    return (
        <div>
            <label htmlFor={name}>{children}</label>
            <select name={name} onChange={onChange} value={value} id={name}>
                {options.forEach(option => <option>{option}</option>)}
            </select>
        </div>
    )
}

function CheckboxField({name, checked, onChange, children}) {
    return (
      <div >
        <input type='checkbox' onChange={onChange} checked={checked} name={name} id={name} className='form-check-input ml-1'/>
        <label  className='ml-4' htmlFor={name}>{children}</label>
      </div>
    )
}
