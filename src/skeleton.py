#! /usr/bin/env python3

import os
import sys

print("""
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
""", flush=True)
os.system("cat src/index.css")
print("""
  <noscript>
""", flush=True)
os.system("cat src/noscript.css")
print("""
  </noscript>
  </style>
<script>
""", flush=True)
os.system("cat src/index.js")
print("""
</script>
  <title>Sub-linear bitfield floodfill</title>
</head>
<body>
  <ul id="nav-sidebar"></ul>
  <main id="main-ele">
""", flush=True)
os.system("cat " + sys.argv[1])
print("""
  </main>
</body>
</html>
""", flush=True)
