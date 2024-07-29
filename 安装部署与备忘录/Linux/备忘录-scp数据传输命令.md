# 备忘录-scp数据传输命令

## 1. 下载文件到本地

```
scp user@remote_host:/path/to/remote_file /path/to/local_file
```

## 2. 上传文件到远程主机

```
scp /path/to/local_file user@remote_host:/path/to/remote_file
```

## 3. 下载目录到本地

```
scp -r user@remote_host:/path/to/remote_directory /path/to/local_directory
```

## 4. 上传目录到远程主机

```
scp -r /path/to/local_directory user@remote_host:/path/to/remote_directory
```

## 报错处理
### 1. scp: realpath ./xxx: No such file
原因可能是因为本地的openssh版本高于服务器上的openssh版本，版本跨度过大导致不兼容。
可以使用 `-O` 参数传输，表示使用传统SCP协议进行文件传输，而不是SFTP协议。
```
scp -r -O xxx root@IP:/root
```