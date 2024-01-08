https://engineering.cred.club/head-of-line-hol-blocking-in-http-1-and-http-2-50b24e9e3372

https://blog.cloudflare.com/hpack-the-silent-killer-feature-of-http-2

https://httpwg.org/specs/rfc7541.html#dynamic.table

https://www.wallarm.com/what/what-is-http-2-and-how-is-it-different-from-http-1

https://aws.amazon.com/compare/the-difference-between-nfs-and-cifs/


https://medium.com/nerd-for-tech/aws-networking-eni-ena-efa-2db316fdbf85
https://varunmanik1.medium.com/aws-eni-vs-en-vs-efa-22250513590f


!!!! https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf



---

Network congestion control refers to the techniques and mechanisms used in computer networks to prevent or mitigate the
effects of congestion – a state where the demand for network resources (like bandwidth) exceeds the available capacity.
Congestion can lead to packet loss, long delays, and a decrease in network throughput. Effective congestion control is
crucial for maintaining optimal performance and reliability of a network. Here are the key aspects of network congestion
control:

Purpose of Congestion Control: The primary goal of congestion control is to ensure that the network remains efficient
and functional, avoiding the situation where it becomes overloaded with traffic. This involves managing how much data is
sent into the network and how it's handled when congestion occurs.

TCP Congestion Control: Since Transmission Control Protocol (TCP) is widely used for data transmission over the
internet, its congestion control mechanisms are particularly important. TCP congestion control algorithms adjust the
rate of data transmission based on the network conditions. Examples include:

Slow Start: Initially, TCP increases its sending rate rapidly to determine the capacity of the network, then slows down
as it approaches the threshold.
Congestion Avoidance: TCP gradually increases the data transmission rate until it detects packet loss, indicating
potential congestion.
Fast Retransmit and Recovery: These mechanisms help to quickly detect and recover from packet loss without waiting for a
full timeout.
Network-Assisted Congestion Control: Some network protocols involve feedback from the network itself to control
congestion. For example, in ATM (Asynchronous Transfer Mode) networks, explicit congestion notification signals can be
sent to the sender to control the data rate.

Avoiding Congestion Collapse: A key goal of congestion control is to prevent congestion collapse, a state where the
network becomes extremely inefficient, and most of the bandwidth is taken up by retransmissions of lost packets.

Fairness: Congestion control algorithms also aim to allocate network resources fairly among users. For example, TCP's
Additive Increase/Multiplicative Decrease (AIMD) algorithm is designed to share network bandwidth equitably among
competing flows.

Queue Management: Routers and switches use various queue management strategies to handle congestion, such as Tail Drop,
Random Early Detection (RED), and Active Queue Management (AQM). These techniques decide which packets to drop or mark
when the network is congested.

Flow Control vs. Congestion Control: Flow control is related but different; it's about the capacity of the receiving end
of a communication to handle incoming data, whereas congestion control is about the overall capacity of the network.

Quality of Service (QoS): QoS mechanisms can also be used to prioritize certain types of traffic during congestion,
ensuring that critical services maintain performance.

---