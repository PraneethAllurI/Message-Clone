import React, { forwardRef } from 'react'
import './Message.css'
import { Card, CardContent, Typography } from "@material-ui/core"

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (

        <div ref={ref} className={`message ${isUser && 'message__user'}`}>

            <Card className={isUser ? "message__userCard" : "message__guestCard"}>

                <CardContent className="card">
                    <Typography

                    >
                        {!isUser && `${message.username || 'Unknown User'}: `}  {message.message}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
})

export default Message;

