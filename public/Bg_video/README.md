# Background Video Setup

Add your background video files to this directory:

## Files needed:
1. **background.mp4** - Main video file (MP4 format recommended)
   - Recommended specs:
     - Resolution: 1920x1080 or higher
     - Duration: 5-10 seconds
     - File size: 2-5 MB (compressed)
     - Codec: H.264 video, AAC audio

2. **thumbnail.jpg** (optional) - Poster image shown while video loads
   - Resolution: 1920x1080
   - Format: JPEG

## How to add videos:
1. Place your `background.mp4` file in this `Bg_video` folder
2. Optionally add a `thumbnail.jpg` poster image
3. The video will automatically play on the home page

## Video Optimization Tips:
- Compress your video to reduce file size
- Use FFmpeg to convert and optimize:
  ```bash
  ffmpeg -i input_video.mov -vcodec libx264 -crf 23 -preset fast background.mp4
  ```

The video will loop infinitely, be muted, and autoplay on the landing page.
