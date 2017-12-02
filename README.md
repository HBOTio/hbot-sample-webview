# Sample-webview

### วิธีการทดสอบ

1. สร้างบอทสำหรับทดสอบใน https://sid.hbot.io
2. ไปที่หน้า Config
3. ทำการ Import ไฟล์ `2112017_141157.hbot`
4. เชื่อมต่อกับเพจเพื่อทดสอบ
5. เปลี่ยน `BROADCAST_API_TOKEN` ในไฟล์ `app.js` ให้เป็นของบอทคุณ
6. รัน `npm install`
7. รัน `node app.js`
8. พูดคุยกับบอทเพื่อเปิด `webview`


---

## Broadcast Message API

Endpoint: https://hbotconnect.unicornonzen.com/api/sendmessage?accessToken=`[Broadcast API TOKEN]`

Method : `POST`

Content-Type : `application/json`

body:
```json
{
	"to": [
		"{USER 1 ID}",
		"{USER 2 ID}"
	],
	"msg_type":"text",
	"msg":"123123",
	"buttons": [],
	"quick_reply" : []
 }
```

---
## Node Type
- Text
- Image
- Audio
- Video
- File
- Carousel
- Set Attributes

---

### Node Type Text

```json
{
  "to": [
    "{USER 1 ID}",
    "{USER 2 ID}"
  ],
  "msg_type":"text",
  "msg":"123123",
  "buttons": [],
  "quick_reply" : []
}
```
---

### Node Type Image
```json
{
  "to": [
    "{USER 1 ID}",
    "{USER 2 ID}"
  ],
  "msg_type":"image",
  "msg":"https://www.example.com/xxx/yyy/zzz.png",
  "quick_reply" : []
}
```
---

### Node Type Audio
```json
{
  "to": [
    "{USER 1 ID}",
    "{USER 2 ID}"
  ],
  "msg_type":"audio",
  "msg":"https://www.example.com/xxx/yyy/zzz.mp3",
  "quick_reply" : []
}
```
---

### Node Type Video
```json
{
  "to": [
    "{USER 1 ID}",
    "{USER 2 ID}"
  ],
  "msg_type":"video",
  "msg":"https://www.example.com/xxx/yyy/zzz.mp4",
  "quick_reply" : []
}
```
---

### Node Type File
```json
{
  "to": [
    "{USER 1 ID}",
    "{USER 2 ID}"
  ],
  "msg_type":"file",
  "msg":"https://www.example.com/xxx/yyy/zzz.pdf",
  "quick_reply" : []
}
```
---

### Node Type Carousel
```json
{
  "to": [
    "{USER 1 ID}",
    "{USER 2 ID}"
  ],
  "msg_type":"carousel",
  "msg":[
    {
      "title": "Title",
      "subtitle": "Subtitle",
      "image_url": "https://www.example.com/xxx/yyy/zzz.png",
      "buttons": [
        {
          "title": "buttonA",
          "type": "web_url",
          "url": "https://www.example.com",
          "webview_height_ratio": "tall"
        },
        {
          "title": "buttonB",
          "type": "show_block",
          "block_ids": ["BLOCK_A_ID", "BLOCK_B_ID"]
        },
      ]
    },
  ],
}
```

**Note:** Max carousel number is 11.

---


### Node Type Set Attributes
```json
{
  "to": [
    "[USER_ID]",
  ],
  "msg_type":"set_attr",
  "msg": [
    {
      "attr_name": "ชื่อ Attribute",
      "attr_value": "ค่าที่จะเก็บ"
    }
  ]
}
```

---

#### Button
Button has 2 types - `web_url` and `show_block` which specify on `type` attribute

**Web url**
```json
"buttons":  [
	{
    "title": "buttonA",
    "type": "web_url",
    "url": "https://www.example.com",
    "webview_height_ratio": "tall"
  }
]
```

*NOTE:* `webview_height_ratio` can be `tall`, `full`, and `compact`

*NOTE 2:* Max buttons number is 3.

**Show Block**
```json
"buttons":  [
	{
    "title": "buttonB",
    "type": "show_block",
    "block_ids": ["BLOCK_A_ID", "BLOCK_B_ID"]
  }
]
```
