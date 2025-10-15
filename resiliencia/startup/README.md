# Comandos para probar Startup en Kubernetes

| Comando                                                        | Descripción                                         |
|---------------------------------------------------------------|-----------------------------------------------------|
| `kubectl apply -f readiness-demo.yaml`                        | Crea el pod                                         |
| `kubectl get pods`                                            | Muestra el estado, la columna READY será 1/1        |
| `kubectl port-forward pod/readiness-demo 8080:8080`           | Accede a `/ready` y `/healthz`                      |
| `curl http://localhost:8080/ready`                            | Verifica si está listo                              |
| `kubectl exec -it readiness-demo -- rm /tmp/ready`            | Simula que el pod deja de estar listo               |
| `kubectl get pods`                                            | La columna READY se mostrará como 0/1 pero el pod sigue Running |
| `kubectl exec -it readiness-demo -- touch /tmp/ready`         | Restaura el estado de "ready"                       |
| `kubectl get pods`                                            | El pod volverá a READY 1/1                          |
| `kubectl delete -f readiness-demo.yaml`                       | Elimina el pod                                      |