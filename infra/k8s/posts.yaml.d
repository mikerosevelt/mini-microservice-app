apiVersion: v1
kind: Pod
metadata:
  name: posts
spec:
  containers:
    - name: posts
      image: posts-service:latest
      imagePullPolicy: Never
