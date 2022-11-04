import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CrudEdit(props){
    const initialState = {
        companyName: "",
        phone: "",
        email: "",
        location: "",
        link: "",
        description: "",
    };
    const [crud, setCrud] = useState(initialState);
    const navigate = useNavigate();
    const {_id} = useParams();

    useEffect(
        function(){
            async function getCrud(){
                try{
                    const response = await axios.get(`http://localhost:8099/api/cruds/${_id}`);
                    setCrud(response.data)
                }catch(error){
                    console.log("error",error);
                }
            }
            getCrud();
        },
        [props]
    );

    function handleSubmit(event){
        event.preventDefault();
        async function udpateCrud(){
            try{
                const response = await axios.patch(`http://localhost:8099/api/cruds/${crud._id}`,crud);
                navigate(`/cruds/${crud._id}`)
            }catch(error){
                console.log(error);
            }
        }
        udpateCrud();
    }

    function handleChange(event){
        setCrud({...crud,[event.target.name]:event.target.value})
    }

    function handleCancel(){
        navigate(`/cruds/${_id}`);
    }

    return(
        <div>
             <div className="container" style={{ maxWidth: "400px" }}>
            <h1>Edit CRUD</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input type="text"
                        name="companyName"
                        className="form-control"
                        value={crud.companyName}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="tel"
                        name="phone"
                        className="form-control"
                        value={crud.phone}
                        onChange={handleChange}
                        pattern="(91)-[0-9]{10}"
                        required
                    />
                    <small>Format : 91-XXXXXXXXXX</small>
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email"
                        name="email"
                        className="form-control"
                        value={crud.email}
                        onChange={handleChange}
                        pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input type="text"
                        name="location"
                        className="form-control"
                        value={crud.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Social Link</label>
                    <input type="url"
                        name="link"
                        className="form-control"
                        value={crud.link}
                        onChange={handleChange}
                    />
                    <small>Format : https://yourlinkedlink.ext</small>
                </div>
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        row = "10"
                        className="form-control"
                        value={crud.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <button
                     type="button"
                     onClick={handleCancel}
                     className="btn btn-secondary">
                        Cancel
                    </button>

                </div>

            </form>
        </div>
        </div>
    )
}

export default CrudEdit;