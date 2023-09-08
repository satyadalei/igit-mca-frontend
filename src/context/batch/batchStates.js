"use client"
import { useEffect, useState } from "react"
import batchContext from "./batchContext"
import sortArrayObject from "@/app/batch/sortBatches"
const BatchStates = (props) => {
    // -------- STATES ----------
    const [batches, setBatches] = useState(null);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    // fetch all batches if user is authenticated
    const fetchAllBatch = async () => {
        const token = localStorage.getItem("token");
        const url = `${baseUrl}/api/batch/fetchAllBatch`
        if (token) {
            const fetchBatches = await fetch(url, {
                method: "GET",
                headers: {
                    token
                }
            })
            const response = await fetchBatches.json();
            if (response.success) {
                const sortedBatches = sortArrayObject(response.batches)
                setBatches(sortedBatches.reverse());
            } else {
                console.log("Batch fetch failed!");
            }
        }else{
            console.log("Not authorized");
        }
    }
    useEffect(() => {
        fetchAllBatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <batchContext.Provider value={{
          batches, fetchAllBatch
        }}>
            {props.children}
        </batchContext.Provider>
    )
}

module.exports = BatchStates;