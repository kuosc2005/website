---
sidebar_position: 1
---

# LTSP Training

Prior to each new deployment project, KUOSC arranges LTSP Training sessions at Kathmandu University. These sessions serve to transfer knowledge about LTSP and the project to upcoming volunteers. The training encompasses not only technical aspects but also social training, instructing volunteers on effective communication with site representatives and preparing deployment reports.

Mentoring for this project is provided by volunteers who possess prior experience from previous years. This training initiative is also conducted entirely by volunteers.

## About LTSP

The Linux Terminal Server Project (LTSP) is a notable initiative that enables multiple user terminals to run off a single central server. It utilizes the Pre-eXecution Environment (PXE) protocol, allowing lightweight client machines to boot remotely and operate within a network environment. LTSP efficiently manages resource distribution, making it a practical solution for institutions aiming to provide cost-effective and manageable computing solutions to a larger number of users.

## Functioning of LTSP

Thin-clients boot through PXE, requesting an IP address from a local DHCP server. The DHCP server then configures additional parameters and transfers the Linux initramfs image to the thin-client via TFTP. Subsequently, the thin-client boots the Linux image, detects hardware, and connects to the LTSP server's X session.
