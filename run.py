import subprocess
import sys
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

# 如果 8081 端口已被占用，先杀掉
result = subprocess.run(
    ["netstat", "-ano"],
    capture_output=True, text=True, encoding="utf-8", errors="replace"
)
for line in result.stdout.splitlines():
    if ":8081" in line and "LISTENING" in line:
        pid = line.strip().split()[-1]
        print(f"端口 8081 已被 PID {pid} 占用，正在终止...")
        subprocess.run(["taskkill", "/F", "/PID", pid], capture_output=True)
        print("已释放端口。")

print("正在启动智能客服服务...")
p = subprocess.Popen(
    ["C:\\Program Files\\nodejs\\node.exe", "server.js"],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True,
    encoding="utf-8",
    errors="replace",
)

try:
    for line in p.stdout:
        print(line, end="")
        if "已启动" in line:
            print("\n✅ 服务已就绪，访问 http://localhost:8081 测试")
            print("按 Ctrl+C 停止服务\n")
except KeyboardInterrupt:
    print("\n正在停止服务...")
    p.terminate()
    p.wait()
    print("服务已停止。")
