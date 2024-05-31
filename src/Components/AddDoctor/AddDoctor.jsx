'use client'
import { Info,Trash } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload } from 'keep-react'
    
const AddDoctor = () => {
    const [files, setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles)
    }, [])

    return (
        <div>
            <h2 className="text-[#000000] text-2xl font-bold py-4">Add a New Doctor</h2>
            <div>
                <form className="border p-12 bg-white rounded-lg">
                    <label className="text-base text-[#383838] font-semibold">Name</label> <br />
                    <input className="py-2.5 pl-6 pr-24 w-full placeholder:text-[#9E9C9C] placeholder:text-base placeholder:font-normal mt-1 mb-3 bg-white border rounded-md" type="text" name="name" id="" placeholder="Enter Your Name"/> <br />
                    <label className="text-base text-[#383838] font-semibold">Email</label> <br />
                    <input className="py-2.5 pl-6 pr-24 w-full placeholder:text-[#9E9C9C] placeholder:text-base placeholder:font-normal mt-1 mb-3 bg-white border rounded-md" type="email" name="email" id="" placeholder="Enter Your email"/> <br />
                    <label className="text-base text-[#383838] font-semibold">Speciality</label> <br />
                    <select className="select mb-4 bg-white border-gray-200 mt-1 w-full max-w-xs">
                    <option>Pick your favorite anime</option>
                    <option>One Piece</option>
                    <option>Naruto</option>
                    <option>Death Note</option>
                    <option>Attack on Titan</option>
                    <option>Bleach</option>
                    <option>Fullmetal Alchemist</option>
                    <option> Bizarre Adventure</option>
                    </select>
                    
                    <Upload options={{ onDrop }}>
                        <Upload.Body className='py-10'>
                            <p className='font-medium text-metal-600'>Upload Your Photo</p>
                            <img src="https://i.postimg.cc/d1BkrX0b/gallery-1.png" alt="folder"/>
                        </Upload.Body>
                        <Upload.Footer isFileExists={files.length > 0}>
                            <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
                            <Info size={16} />
                            Uploaded Files
                            </p>
                            <ul className="space-y-1">
                            {files?.map((file) => (
                                <li
                                key={file?.name}
                                className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
                                {file?.name}
                                <Trash size={16} color="red" />
                                </li>
                            ))}
                            </ul>
                        </Upload.Footer>
                    </Upload>
                    <input className='text-xl text-[#FFFFFF] font-semibold w-full bg-[#07332F] py-2 rounded-md mt-4' type="button" value="Add"/>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;