"use client"
import React, { useContext, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import NavBar from '@/components/header/NavBar'
import Footer from '@/components/footer/Footer'
import batchContext from "@/context/batch/batchContext";
import Loading from '@/components/common/Loading'
import Alert from '@/components/common/Alert'
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext'
import activeUserAndLoginStatus from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext'
import useWindowSize from '@/components/WindoSizeHook'
import Link from "next/link";



const App = ({ children }) => {

    const { fetchAllBatch, fetchBatchLists } = useContext(batchContext);
    const { loading, alert } = useContext(loadingAndAlertContext);
    const { fetchActiveUser, activeUser, loginStatus } = useContext(activeUserAndLoginStatus);

    const { width, height } = useWindowSize();

    // Initial api calls
    useEffect(() => {
        fetchAllBatch();
        fetchBatchLists();
        fetchActiveUser();
    }, []);

    return (
        <>
            <Provider store={store} >
                {loading && <Loading />}
                {alert.alert && <Alert />}
                {activeUser !== null && loginStatus && activeUser.status === 0 &&
                    <div className="bg-red-500 text-black p-2 flex flex-col items-center" >
                        <p className='text-center' >
                            Account not verified! <br />
                            Upload profile picture(Professional) and add LinkedIn profile to get verified soon! <br />
                        <Link className='text-white underline' href="/profile">Update profile!</Link>
                         <br /> If already did, wait for few hours. {" "}
                            <Link
                                className='text-white underline'
                                target="_blank"
                                href={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/documents%2Fhowto%2Fdocument.pdf?alt=media&token=9bdc2dc2-04c1-4273-8fb9-0479b077b490"}
                            >
                               Learn more
                            </Link>
                        </p>
                    </div>
                }
                <NavBar />
                {children}
                <Footer />
            </Provider>
        </>
    )
}

export default App