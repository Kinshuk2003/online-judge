export default function DropDownSelect({ onLanguageChange }) {

    const handleChange = (event) => {
        onLanguageChange(event.target.value);
    }

    return (
        <select name="language" id="language" onChange={handleChange} className="bg-slate-100 rounded-md p-1 m-3">
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
        </select>
  )};
