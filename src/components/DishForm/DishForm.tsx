import { useState } from "react";



const DishForm = ()=> {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [img, setImg] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange=(e: React.ChangeEvent<HTMLInputElement>)=> {
     const file = e.target.files?.[0];
    if (file) {
        setFileName(file.name);
        const reader = new FileReader()
        reader.onloadend=()=> {
            setImg(reader.result as string)
                
            
        };
        reader.readAsDataURL(file);
    }
     
    }

    const handleSubmit=(e: React.FormEvent)=> {
        e.preventDefault();
        console.log(title, price, img);
        
    }
return (
<div>
    <p>Add dish</p>
    <form onSubmit={handleSubmit}>
        <div>
            <label>title</label>
            <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
             <label>price</label>
             <input type="number" value={price} onChange={e=> setPrice(Number(e.target.value))}/>
        </div>
        <div>
            <label>Image upload</label>
            <input type="file" onChange={handleFileChange}/>
            {fileName && <p>Selected File; {fileName}</p>
            }
            {img && (
                <div>
                <img src={img} alt="previw" />
                </div>
            )}
        </div>
        <button type="submit">Save</button>
    </form>
</div>

)

}

export default DishForm