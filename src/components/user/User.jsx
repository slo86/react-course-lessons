import {useGetUsersQuery} from "../../redux/services/api.js";

export const User = ({id}) => {
    const { data } = useGetUsersQuery(undefined, {
        selectFromResult: ({ data, ...rest }) => ({
            ...rest,
            data: data?.find(user => user.id === id),
        }),
    });

    if (!data) {
        return null;
    }

    return (
        <span>{data.name}</span>
    );
};
