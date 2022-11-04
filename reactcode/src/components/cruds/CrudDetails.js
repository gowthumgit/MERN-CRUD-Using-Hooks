import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDetails(props){
    const [crud,setCrud] = useState({});
    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect(
        function(){
            async function getCrudById(){
                try{
                    const response = await axios.get(`http://localhost:8099/api/cruds/${_id}`);
                    setCrud(response.data);
                }catch(error){
                    console.log("error",error);
                }
            }
            getCrudById();
        },
        [props]
    );

    async function handleDelete(){
        try{
            const response = await axios.delete(`http://localhost:8099/api/cruds/${_id}`);
            setCrud(response.data);
        }catch(error){
            console.log("error",error);
        }
    }

    return(
        <div className="container">
            <h1>{crud.companyName}</h1>
            <p>
                <b>Phone</b> : <a href={`tel:+${crud.phone}`}>{crud.phone}</a>
            </p>
            <p>
                <b>Email</b> :{crud.email}
            </p>
            <p>
                <b>Location</b> :{crud.location}
            </p>
            <p>
                <b>Link</b> : <a href={`${crud.link}`} target="_blank" rel="noreferror">
                    {crud.link}
                </a>
            </p>
            <p>
                <b>Description</b> : <p align="justify">{crud.description}</p>
            </p>
            <p>
                <small>
                    <b>ID</b> : {crud._id}
                </small>
            </p>
            <div className="btn-group">
                <Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
                    Edit
                </Link>
                <button onClick={handleDelete} className="btn btn-danger">
                    Delete
                </button>
                <Link to="/cruds" className="btn btn-secondary">
                    Close
                </Link>
            </div>
        </div>
    )
}

export default CrudDetails;