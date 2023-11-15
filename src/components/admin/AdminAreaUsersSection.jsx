"use client"
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import UserAccountAccordion from '../common/UserAccountAccordin';
import fakeResponse from '@/data/fakeUserData';
import batchContext from "@/context/batch/batchContext";
import activeUserAndLoginStatus from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext';
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext';

const Users = () => {
  const { batches } = useContext(batchContext);
  const {logOutUser} = useContext(activeUserAndLoginStatus);
  const {startLoading,stopLoading, createAlert} = useContext(loadingAndAlertContext);

  const user = useSelector(state => state.user);
  const batch = "all"; // or 41 42 43

  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
  const [userAccounts, setUserAccounts] = useState(null);
  // const [queryUri, setQueryUri] = useState(`${baseApi}/api/accounts/fetchAccounts?batch=all&unverified=true`);

  const [filterParams, setFilterParams] = useState({
    batch: "all",
    unverified: true,
  })

  const handleFilterChange = (e) => {
    setFilterParams((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  // console.log(fakeResponse);

  const fetchAccounts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        logOutUser();
        return ;
      }
      startLoading();
      const { batch, unverified } = filterParams;
      const url = `${baseApi}/api/accounts/fetchAccounts?batch=${batch}&unverified=${unverified}`
      const fetchUserAccounts = await fetch(url, {
        method: "GET",
        headers : {
          "token" : token 
        }
      })
      const response = await fetchUserAccounts.json();
      stopLoading();
      if (response.success) {
        const { userAccounts } = response.data;
        setUserAccounts(userAccounts.reverse())
      }
    } catch (error) {
      stopLoading();
      setUserAccounts([]);
      console.log("Some error occurred fetching user accounts ", error);
    }
  }

  useEffect(() => {
    fetchAccounts();
  }, [filterParams])


  return (
    <div>
      <div className='border-2 border-sky-500 border-solid mt-1 mb-1 p-1' >
        <h5>Entire MCA Users status </h5>
        <ul className='flex list-none' >
          <li>Total users  </li>
        </ul>
      </div>
      <div className='flex items-center' >
        <h5 className='mr-2' >Apply filter :</h5>
        <ul className='flex list-none' >
          <li className='mr-5' >
            Batch :
            <select name="batch" onChange={handleFilterChange} id="">
              <option value="All">All</option>
              {batches != null &&
                batches.map((batch,index) => {
                  return <option key={index} value={batch.batchNum}>{batch.batchNum}</option>
                })
              }
            </select>
          </li>
          <li className='mr-5' >
            <input type="radio" onChange={handleFilterChange} defaultChecked name="unverified" value={true} id="" />
            Unverified
          </li>
          <li className='mr-5' >
            <input type="radio" onChange={handleFilterChange} name="unverified" id="" value={false} />
            Verified
          </li>
        </ul>
      </div>
      <h5>Users list</h5>
      <div className='h-96 border-2 border-sky-500 border-solid p-5 overflow-y-scroll' >
        {userAccounts != null &&
          (userAccounts.length != 0 ? <>
            {/* Here we are passing fetchUserAccounts because we want to fetchUserAccounts every time each user account get verified to update all user account status  */}
            <UserAccountAccordion fetchUserAccounts={fetchAccounts} userAccounts={userAccounts} />
            {/* <UserAccountAccordion userAccounts={userAccounts} />
            <UserAccountAccordion userAccounts={userAccounts} />
            <UserAccountAccordion userAccounts={userAccounts} />
            <UserAccountAccordion userAccounts={userAccounts} />
            <UserAccountAccordion userAccounts={userAccounts} /> */}
          </>
          :
          <h4>No accounts found</h4>
          )
        }
      </div>
    </div>
  )
}

export default Users