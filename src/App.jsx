import { useState } from "react"

const App = () => {



  const [text, setText] = useState("My Text Here")
  const [ahmed, setAhmed] = useState("Ahmed")


  const onChangeHandler = (e) => {
    
      setText(e.target.value) 
      console.log(text.length)
    
  }


const upperCaseHandler = ()=> {
  setText(text.toUpperCase())
}

let [newText, setNewText] = useState("")
const findWords = () => { 
  let lowerText = text.toLowerCase();
   newText = lowerText.replace(/class/g, "className");
  console.log(newText);
  setNewText(newText)
}


const copyText = () => {
  navigator.clipboard.writeText(newText)
  alert("Copied")
 }




  return (
    <div>
      


<textarea name="Text" id="" cols="30" rows="10" value={text} onChange={onChangeHandler} className=" border border-solid  mt-44"></textarea>
<button className=" py-4 px-7 border border-solid  bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all rounded-lg" onClick={upperCaseHandler}>Convert into Upper Case</button>
<button className=" py-4 px-7 border border-solid  bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all rounded-lg" onClick={findWords}>Replace Class with className</button>



<p>The Above Paragraph contains {text.split(" ").length  } Words and {text.length } Characters</p>

<p>It will {text.split(" ").length / 125} minutes for a person to read this</p>



<h1 className=" text-4xl font-semibold">Preview</h1>
<button className=" py-3 px-4 border border-solid rounded ml-5 font-semibold hover:bg-black hover:text-white transition-all" onClick={()=>{copyText()}}>Copy</button>


<pre>
  {newText}
</pre>

    </div>







  )
}

export default App
