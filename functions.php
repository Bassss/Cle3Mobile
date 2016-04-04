<?php

DEFINE("MESSAGE_TEXT",0);
DEFINE("MESSAGE_QUOTE",1);


function getMessageType($type)
{
    switch ($type) {
        case 0: {
            $type = "Message";
            break;
        }
        case 1: {
            $type = "Spotify";
            break;
        }
        case 2: {
            $type = "Image";
            break;
        }
        case 3: {
            $type = "Youtube";
            break;
        }
    }
    return $type;
}

function getMessageColor($color)
{
    switch ($color) {
        case 0: {
            $color = "Red";
            break;
        }
        case 1: {
            $color = "Green";
            break;
        }
        case 2: {
            $color = "Blue";
            break;
        }
        case 3: {
            $color = "Cyan";
            break;
        }
        case 4: {
            $color = "Yellow";
            break;
        }
    }
    return $color;
}

function getMessageStatus($status)
{
    switch ($status) {
        case 0: {
            $status = "New & unread";
            break;
        }
        case 1: {
            $status = "Loaded, ready to be shown";
            break;
        }
        case 2: {
            $status = "Shown";
            break;
        }
    }
    return $status;
}
