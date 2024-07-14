import React, {Children, cloneElement} from "react";

export default function Tabs({ activeTab, children, onTabsChange }) {
    return <div className='tabs'>
        {Children.map(children, (child, index) =>
            cloneElement(child, {
                active: activeTab === child.props?.value,
                onTabClick: onTabsChange
            })
        )}
    </div>
}
