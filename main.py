
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import threading
import webbrowser

HOST = "127.0.0.1"
PORT = 8000

def open_website():
    webbrowser.open(f"http://{HOST}:{PORT}/code.html")

server = ThreadingHTTPServer((HOST, PORT), SimpleHTTPRequestHandler)

print("Confession website is running!")
print(f"Open http://{HOST}:{PORT}/code.html")
print("Press CTRL+C to stop.")

threading.Timer(1, open_website).start()

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
    server.server_close()
