import {Children} from "react";

export default function TabsContainer({ activeTab, children }) {
    return <div className='tab-container'>
        {Children.map(children, child => {
            return activeTab === child.props?.value ? child : null;
        })}
    </div>
}