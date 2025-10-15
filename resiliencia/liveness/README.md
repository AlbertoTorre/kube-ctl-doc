# Comandos para probar Liveness en Kubernetes

| Comando                                                               | Descripción                                                      |
|-----------------------------------------------------------------------|------------------------------------------------------------------|
| Abre la aplicación Docker Desktop                                     | Inicia Docker Desktop                                            |
| `minikube start --driver=docker`                                      | Inicia Minikube usando Docker                                    |
| `kubectl apply -f liveness-demo.yaml`                                 | Despliega el pod con probe                                       |
| `kubectl get pods`                                                    | Verifica que el pod esté corriendo (sin reinicios)               |
| `kubectl port-forward pod/liveness-demo 8080:8080`                    | Abre puerto para acceder desde el navegador o curl               |
| `curl http://localhost:8080/healthz`                                  | Verifica que responde correctamente (OK)                         |
| `kubectl exec -it liveness-demo -- /bin/sh`                          | Abre una shell dentro del pod                                    |
| `rm /tmp/healthy`                                                     | Simula fallo eliminando el archivo que usaba el endpoint         |
| `exit`                                                                | Sal del pod                                                      |
| `while ($true) { kubectl get pods; Start-Sleep -Seconds 5 }`          | Ejecuta `kubectl get pods` cada 5 segundos (PowerShell)          |
| `kubectl logs liveness-demo`                                          | Verifica los logs                                                |
| `kubectl delete pod liveness-demo`                                    | Limpieza del ejemplo                                             |