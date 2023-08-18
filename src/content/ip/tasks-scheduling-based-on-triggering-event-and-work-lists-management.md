---
nature: patent
uspto_publication_number: US10403399B2
inventor: Shah N. Shahid
current_assignee: Netspective Communications LLC
patent_owners_rights: The assignee of this patent is the rightful owner of all associated rights and privileges, including the exclusive right to sell, license, and enforce the patent. Any transfer, sale, or licensing of the patent by parties other than the assignee requires explicit written authorization.
territorial_scope: US
uspto_patent_family_members_publication_numbers: None
application_date: 2015-11-19
issue_date: 2019-09-03
expiry_date: 2038-04-16
url: "/ip/tasks-scheduling-based-on-triggering-event-and-work-lists-management"
uspto_patent_pdf: "https://patentimages.storage.googleapis.com/2f/e7/27/f40f5ddb15d76e/US7039898.pdf"
external_links: https://patents.google.com/patent/US10403399B2
left_content: 
 title: Tasks scheduling based on triggering event and work lists management
 thumbnail: "/assets-natural/brand/www.netspective.com/ip/US7039898.jpg"
 topics: 
  - Clinical Workflow Enhancement
  - Task Scheduling Automation
  - Automated Care Plans
 description: 
  Healthcare systems, medical devices, and software often operate in isolation, resulting in siloed patient information, interoperability hurdles, and limited real-time insights. This data fragmentation hampers effective patient care coordination, decision-making, and operational efficiency. In some cases, healthcare providers need something from patients regularly but do not necessarily want a special trip by the healthcare providers to visit the patients every time. However, the current methods and systems do not allow healthcare providers to take care of these issues without having them to visit the patients every time.

---
## Problem solved by the invention

Healthcare systems, medical devices, and software often operate in isolation, resulting in siloed patient information, interoperability hurdles, and limited real-time insights. This data fragmentation hampers effective patient care coordination, decision-making, and operational efficiency. In some cases, healthcare providers need something from patients regularly but do not necessarily want a special trip by the healthcare providers to visit the patients every time. However, the current methods and systems do not allow healthcare providers to take care of these issues without having them to visit the patients every time.


## Technical solution

The patent offers a transformative method and system for seamless task scheduling, execution, and monitoring, optimizing healthcare workflows. Employing predefined rules in certain environments, real-time notifications, and adaptive updates, it ensures efficient task management, empowering healthcare professionals for timely, patient-centric care without actually visiting the patients each time.

## Potential applications

1. Telemedicine and remote monitoring
2. Hospital at Home Care
3. Healthcare task management
4. Patient care coordination
5. Patient engagement

## Summary of the patented technology

The presented invention introduces a comprehensive computer-implemented system designed to revolutionize protocol documentation, automation, and compliance within the realm of safety-critical medical devices and patient care. This innovative ecosystem embodies a collaborative approach, addressing the intricate challenges faced by healthcare industries, life sciences, and medical devices. Its core function is to enable the streamlined management and execution of protocols and worklists across diverse medical devices, disciplines, and stakeholders.

At its core, the system orchestrates a dynamic framework where protocols serve as shared baselines, guiding the execution of tasks across a multitude of safety-critical devices, each designed to collect and generate patient data. This facilitates synchronized and efficient patient care, eliminating variations and ensuring scalability, repeatability, and compliance. The system's adaptability shines through its capacity to accommodate customized patient-centric variations while maintaining adherence to established protocols.

In practice, the system offers far-reaching benefits, particularly in regulated industries where process-driven approaches are crucial for patient safety. The system excels in creating, coordinating, and automating complex care plans, bridging various organizational boundaries through its integration-friendly design. Notably, it enables patients to actively manage their health, engage in personalized care plans, and seamlessly communicate with healthcare professionals, all from the comfort of their homes.

A key innovation is the integration of WiFi-enabled LEDs within an interaction zone where the system is deployed, enhancing task management through real-time monitoring and event-triggered actions. Furthermore, the system empowers stakeholders from diverse disciplines, institutions, and organizations to collaboratively contribute to executable worklists, fostering efficient distributed workflows.

Through a carefully crafted blend of software and hardware elements, the invention brings forth a novel paradigm in medical care. It enables the automation of routine tasks, ensuring precision and timeliness, while offering the flexibility for modifications to suit unique patient needs. The resulting impact spans optimized clinical operations, reduced procedural overuse, enhanced medication administration, and a robust statistical framework for continuous improvement.

Ultimately, this inventive system provides a dynamic, adaptable, and interconnected platform that redefines medical protocol execution and patient care. By enabling the seamless collaboration of healthcare professionals, patients, and devices, it ushers in an era of streamlined, patient-centric, and compliance-driven medical practices.
## Claims

1. A workflow management system, comprising: a processor; and a memory, wherein the memory stores instructions that, when executed by the processor, cause the processor to: identify an event received from an external system; generate a work item corresponding to the event, the work item having a plurality of attributes; assign the work item for distribution based on the attributes; and adjust at least one of a priority or a routing strategy for the work item according to a status of the work item.

2. The workflow management system of claim 1, wherein the attributes comprise at least one of an urgency level, a target service level, a process type, or type of worker to perform the Work item.

3. The workflow management system of claim 2, wherein the target service level corresponds to an amount of elapsed time before the work item is distributed to a worker.

4. The workflow management system of claim 2, wherein the status of the work item comprises information about an approaching threshold of the target service level.

5. The workflow management system of claim 1, wherein the instructions, when executed, further cause the processor to send notifications to and receive acknowledgements from the worker, the notifications indicating a status of a work item.

6. The workflow management system of claim 5, wherein the routing strategy for the work item is adjusted by sending a notification to a different worker.

7. The workflow management system of claim 1, wherein the instructions, when executed, further cause the processor to receive a record corresponding to the work item, and send a notification to a next worker in the workflow when the record is received.

8. The workflow management system of claim 7, wherein the status of the work item comprises information about availability of the record.

9. The workflow management system of claim 1, wherein the priority or the routing strategy for the work item is adjusted based on business rules.

10. The workflow management system of claim 1, wherein the instructions, when executed, further cause the processor to distribute the work item to a worker based on the worker's skills and availability.

11. A method for workflow management, the method comprising: identifying, by one or more processors, an event received from an external system; generating, by the one or more processors, a work item corresponding to the event, the work item having a plurality of attributes; assigning, by the one or more processors, the work item for distribution based on the attributes; and adjusting, by the one or more processors, at least one of a priority or a routing strategy for the work item according to a status of the work item.

12. The method of claim 11, wherein the attributes comprise at least one of an urgency level, a target service level, a process type, or type of worker to perform the work item.

13. The method of claim 12, wherein the target service level corresponds to an amount of elapsed time before the work item is distributed to a worker.

14. The method of claim 12, wherein the status of the work item comprises information about an approaching threshold of the target service level.

15. The method of claim 11, further comprising sending, by the one or more processors, notifications to the worker and receiving, by the one or more processors, acknowledgements from the worker, the notifications indicating a status of a work item.

16. The method of claim 15, wherein the routing strategy for the work item is adjusted by sending a notification to a different worker.

17. The method of claim 11, further comprising receiving, by the one or more processors, a record corresponding to the work item, and generating, by the one or more processors, a notification when the record is received.

18. The method of claim 17, wherein the status of the work item comprises information about availability of the record.

19. The method of claim 11, wherein the priority or the routing strategy for the work item is adjusted based on business rules.

20. The method of claim 11, further comprising distributing, by the one or more processors, the work item to a worker based on the worker's skills and availability.
