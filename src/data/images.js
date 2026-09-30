const imageUrl = (photoId, width = 900) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`

// Image credits: Unsplash (images.unsplash.com), delivered via its image CDN.
export const images = {
  landingBackground: imageUrl('photo-1540575467063-178a50c2df87', 2200),
  plannerBackground: imageUrl('photo-1497366754035-f200968a6e72', 1800),
  placeholder:
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"%3E%3Cdefs%3E%3ClinearGradient id="g" x2="1" y2="1"%3E%3Cstop stop-color="%23e8eff2"/%3E%3Cstop offset="1" stop-color="%23cbd9df"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="500" fill="url(%23g)"/%3E%3C/svg%3E',
  items: {
    'conference-room': imageUrl('https://www.google.com/imgres?q=conference%20room%20capacity%2015%20person&imgurl=https%3A%2F%2Fwww.manilaofficefurnitureden.ph%2Fwp-content%2Fuploads%2F2019%2F11%2F5c55a047-e0f5-41f8-aa04-167b168fd67f-800x800.png&imgrefurl=https%3A%2F%2Fwww.manilaofficefurnitureden.ph%2Fproduct%2Fconference-table-ct-05%2F%3Fsrsltid%3DAU7gw4WrZ4vRRNjgu10VPW8v_ftg7Se31SmseTv4ae7-fBpwJL12vXuV&docid=UdvwH-q11s6cvM&tbnid=rulRDUwLSmD4jM&vet=12ahUKEwj-i6uai5WXAxU-TWwGHbhgIpUQnPAOegUIkAEQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwj-i6uai5WXAxU-TWwGHbhgIpUQnPAOegUIkAEQAA'),
    auditorium: imageUrl('photo-1503428593586-e225b39bddfe'),
    'presentation-room': imageUrl('photo-1497366811353-6870744d04b2'),
    'large-meeting-room': imageUrl('photo-1497366216548-37526070297c'),
    'small-meeting-room': imageUrl('photo-1497366754035-f200968a6e72'),
    projectors: imageUrl('photo-1524758631624-e2822e304c36'),
    speakers: imageUrl('photo-1608043152269-423dbba4e7e1'),
    microphones: imageUrl('photo-1590602847861-f357a9332bbc'),
    whiteboards: imageUrl('photo-1580894732444-8ecded7900cd'),
    signage: imageUrl('photo-1500530855697-b586d89ba3ee'),
    breakfast: imageUrl('photo-1533089860892-a7c6f0a88666'),
    lunch: imageUrl('photo-1547592180-85f173990554'),
    highTea: imageUrl('photo-1499636136210-6f4ee915583e'),
    dinner: imageUrl('photo-1515003197210-e0cd7184f8b5'),
  },
}