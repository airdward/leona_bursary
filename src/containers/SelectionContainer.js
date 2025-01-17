import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listScholars, prevPage, nextPage } from '../modules/scholarList';
import ListSelectionScholar from '../components/ListSelectionScholar';
import styled from 'styled-components';

const SelectionContainer = ()=>{

    const dispatch = useDispatch();
    const { scholars, tempPage, lastPage, total, error, loading, searchWord, orderBase } = useSelector(({ scholars, loading, search })=>({
        scholars:scholars.scholars,
        tempPage:scholars.tempPage,
        lastPage:scholars.lastPage,
        total:scholars.total,
        error:scholars.error,
        loading:loading['applyList/LIST_scholars'],
        searchWord:search.searchWord,
        orderBase:search.orderBase,
    }));

    const toNextPage = e =>{
        if(e){
            e.preventDefault();
        }
        dispatch(nextPage());
    }

    const toPrevPage = e =>{
        e.preventDefault();
        dispatch(prevPage());
    }

    useEffect(()=>{
        dispatch(listScholars(1));
    }, [dispatch]);


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><ListSelectionScholar scholars={scholars} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total} searchWord={searchWord} orderBase={orderBase}/></div>;
};

export default SelectionContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;