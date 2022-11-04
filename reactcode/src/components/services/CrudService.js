import React, { useState } from "react";
import axios from "axios";

class CrudService{
    createCrud(crud){
        return axios.post("http://localhost:8099/api/cruds/",crud);
    }
}

export default new CrudService();