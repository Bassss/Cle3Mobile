---
--- TABLE: messages
--- 
Column                        Info
id          Auto increment    Contains unique ID of the message

type        Message type      The type of the message, needed to know what and how to show message content.
                              Possible types:
                                0 - Message  (default)
                                1 - Spotify
                                2 - Image
                                
content                         Contains the content based on message type. Possible content:
                                0 - Message (text)
                                1 - Spotify (sound url, or ID)
                                2 - Image (link to image file on web server)
                                
description                     Contains the description of the content. Examples:
                                Youtube video - Description of the video below
                                Image - Description of the picture, centered horizon and vertical
                                Spotify - Artist name, title and album centered horizon and vertical

color                           Contains the color code to light up the device, possible colors:
                                0 - Red (default)
                                1 - Green
                                2 - Blue
                                3 - Cyan
                                4 - Yellow
                                
date          timestamp         Contains the timestamp of the date when message is being added into db.

status                          Contains message status. Possible statuses:
                                0 - New, just added, nothing done with it yet
                                1 - Send to a chair, not shown to visitors yet.
                                2 - Shown to the visitors.
