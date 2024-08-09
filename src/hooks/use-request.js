import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectRequestStatus} from "../redux/ui/request/request";

export const useRequest = (thunk, ...params) => {
    const [request, setRequest] = useState();
    const dispatch = useDispatch();

    const requestStatus = useSelector((state) =>
        selectRequestStatus(state, request?.requestId)
    );

    useEffect(() => {
        const request = dispatch(thunk(...params));

        setRequest(request);

        return () => {
            request.abort();
            setRequest(null);
        };
    }, [dispatch, ...params, thunk]);

    return requestStatus;
};
