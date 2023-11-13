"use client"
import { useEffect, useState } from "react"
import batchContext from "./batchContext"
import sortArrayObject from "@/app/batch/sortBatches"
const BatchStates = (props) => {
    // -------- STATES ----------
    const [batches, setBatches] = useState(null);
    const [batchLists, setBatchLists] = useState(null);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // fetch if the user is not authenticated :: This is for registration purpose (To let select their batch)
    const fetchBatchLists = async () => {
        const url = `${baseUrl}/api/batch/fetchBatchLists`;
        try {
            const fetchBatchLists = await fetch(url, {
                method: "GET",
            })
            const response = await fetchBatchLists.json();
            if (response.success) {
                setBatchLists(sortArrayObject(response.batchLists))
            } else {
                console.log("Problem in loading batches");
            }
        } catch (error) {
            console.log("Some error occurred fetching batches");
            setBatchLists(null);
        }
    }

    // fetch all batches if user is authenticated :: When user visits batch page
    const fetchAllBatch = async () => {
        const token = localStorage.getItem("token");
        const url = `${baseUrl}/api/batch/fetchAllBatch`
        try {
            if (token) {
                const fetchBatches = await fetch(url, {
                    method: "GET",
                    headers: {
                        token
                    }
                })
                const response = await fetchBatches.json();
                fetchBatchLists();
                if (response.success) {
                    const sortedBatches = sortArrayObject(response.batches)
                    setBatches(sortedBatches.reverse());
                } else {
                    console.log("Batch fetch failed!");
                }
            } else {
                fetchBatchLists(); 
            }
        } catch (error) {
           console.log("Some error occurred fetching batches");
        }
    }

    return (
        <batchContext.Provider value={{
            batches,  // for authorized user
            fetchAllBatch,
            batchLists, fetchBatchLists  // for unauthorized user
        }}>
            {props.children}
        </batchContext.Provider>
    )
}

module.exports = BatchStates;