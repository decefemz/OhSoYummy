
import SlidingPane from "react-sliding-pane";
import React from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function MenuBar(props) {
    return (
        <div>
            <SlidingPane
                isOpen={props.state}
                title="Menu"
                from="left"
                hideHeader={true}
                height='fit-content'
                width="300px"
                onRequestClose={() => props.close()}
            >
                <div>And I am pane content on left.</div>
            </SlidingPane>
        </div>
    )
}
