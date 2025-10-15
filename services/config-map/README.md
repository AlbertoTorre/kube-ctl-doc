Comando Descripción
kubectl apply -f
configmap.yaml Aplica el ConfigMap al clúster.
kubectl apply -f podconfigmap.yaml Despliega el Pod.
kubectl describe configmap
app-config
Revisa el contenido del
ConfigMap.
kubectl exec -it app-pod -- sh Nos conectamos al pod
env
Consultamos las variables de
entorno
kubectl delete pod app-pod Elimina el Pod.
kubectl delete configmap
app-config Elimina el ConfigMap.
