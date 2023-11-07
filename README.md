# Youtube Thumbnails in Thunderbird

## Install

- Download the .xpi file from release
- Add in Thunderbird as extension from file (Add-ons Manager -> Gear Icon -> Install Add On From File)

You should be able to see the thumbnails added to any feed coming from a YouTube channel.

## Adding YouTube Feeds to Thunderbird

You can add YouTube Feeds to Thunderbird with the following URL:

    https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}
    
Where `{CHANNEL_ID}` is the unique id for a channel.

To get the channel ID, you can use the following command from cli: 
```bash
curl -sfLS {CHANNEL_URL}  | grep channelId | sed  -n 's/.*<meta itemprop="channelId" content="\([^"]*\)".*/\1/p'
```
where `{CHANNEL_URL}` is the url for the channel you want to add in your feed.

Alternatively, if the above instructions feel too much for you, follow below steps: 
- Open YouTube channel's homepage
- Right click -> View Source (Ctrl+U)
- Ctrl+F (Find on page) -> find keyword "RSS"
- Just next to ```title="RSS"``` field, there's ```href="..."``` link. That's RSS feed for that specific channel. Copy that and paste it in Thunderbird. 

I think there are more convenient ways to do this without command line but I'm not aware of them personally (you can suggest them here if you want).

## Features
- Added thumbnail by scraping from youtube URL
- Added hover effect and dark theme
- Clicking on thumbnail should launch video on default browser