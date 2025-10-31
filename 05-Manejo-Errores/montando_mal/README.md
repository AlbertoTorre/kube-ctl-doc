# Kubectl exec de un Pod con error

## Pasos iniciales
1. Crear el ConfigMap:
```bash
kubectl create configmap site-content --from-literal=custom.html="<h1>¡Bienvenido a mi sitio personalizado!</h1>"
```

2. Crear el Pod:
```bash
kubectl apply -f nginx-debug-pod.yaml
```

3. Verificar el estado (Running):
```bash
kubectl get pods
```

4. Prueba de acceso:
```bash
kubectl port-forward pod/nginx-debug-pod 8080:80
```

5. Abrir en el navegador: 
```
localhost:8080
```

## Debugging
1. Ingresar con kubectl exec:
```bash
kubectl exec -it nginx-debug-pod -- /bin/sh
```

2. Ver que archivos hay:
```bash
ls -l /usr/share/nginx/html/
```

3. Confirmar contenido de Custom:
```bash
cat /usr/share/nginx/html/custom.html
```

## Solución
1. Eliminar el ConfigMap actual:
```bash
kubectl delete configmap site-content
```

2. Crear un ConfigMap con la clave correcta:
```bash
kubectl create configmap site-content --from-literal=index.html="<h1>¡Bienvenido a mi sitio personalizado!</h1>"
```

3. Recrear el pod:
```bash
kubectl delete pod nginx-debug-pod
kubectl apply -f nginx-debug-pod.yaml
```

4. Validar solución:
- Ejecutar port-forward
- Acceder a localhost:8080 en el navegador