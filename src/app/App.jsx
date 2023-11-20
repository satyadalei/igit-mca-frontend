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

const App = ({ children }) => {

    const {fetchAllBatch, fetchBatchLists } = useContext(batchContext);
    const {loading, alert} = useContext(loadingAndAlertContext);
    const {fetchActiveUser } = useContext(activeUserAndLoginStatus);

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
                <NavBar />
                {loading && <Loading /> }
                {alert.alert && <Alert />}
                {children}
                <Footer />
            </Provider>
        </>
    )
}

export default App