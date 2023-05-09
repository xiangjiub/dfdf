{
  "name": "我的小插件",
  "description": "一个非常高大上的图片下载插件",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "chrome_url_overrides": {
    "newtab": "override_page1.html"
  },
  "background": {
    "service_worker": "background.html"
  },
  "content_scripts": [
    {
      "matches": [
        "<all_urls>"
      ],
      "js": [
        "jquery.min.js",
        "content-script.js"
      ],
      "run_at": "document_start"
    }
  ],
  "commands": {
    "_execute_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+F",
        "mac": "MacCtrl+Shift+F"
      },
      "description": "Opens popup.html"
    }
  },
  "options_page": "override_page.html"
}