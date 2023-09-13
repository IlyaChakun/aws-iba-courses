consensus algorithms Paxos, Raft, ZAB, Pacifica

Symmetric/leader-less: Here, all servers participating in the consensus have equal roles. So the client can connect to
any one of the servers in this case. Example: Paxos.
Asymmetric/leader-based: Here, at any given time, one server acts as the leader apart from those participating in the
consensus. The rest of the servers accept the leader’s decisions. Here, clients can only communicate with the leader.
Example: Raft, ZAB.




Cassandra implemented Paxos for their lightweight transactions. Kafka internally uses Pacifica, whereas Zookeeper and Hazelcast use ZAB and Raft, respectively




links:
* https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html
* https://dzone.com/articles/overview-of-implementing-distributed-locks
* https://hazelcast.com/blog/long-live-distributed-locks/
* https://medium.com/@lalitadithya/everything-ive-learnt-about-distributed-locking-so-far-1f1569e6df5
* http://thesecretlivesofdata.com/raft/
* https://web.mit.edu/6.005/www/fa15/classes/23-locks/
* 