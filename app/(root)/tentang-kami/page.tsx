import Intro from "@/components/section/Intro";
import { MemberCard, MemberGrid } from "@/components/ui/Member";

export default function TentangKamiPage() {
	const introProps = {
		title: "Sarang Semut",
		description: "UKM Sarang Semut is a vibrant student organization at Universitas Tanjungpura, located in Pontianak, West Borneo. Founded in 2021, Sarang Semut serves as a creative hub for students passionate about performing arts and cultural preservation. Our name, which translates to 'Ants' Nest,' symbolizes the strength, unity, and collective effort of our members, much like a colony of ants working together towards common goals.",
		image_link: "https://plus.unsplash.com/premium_photo-1661329832448-b79c0fd51890?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	};

	const memberProps = {
		title: "Anggota Inti",
		members: [
			{
				id: 1,
				name: "ahmad subarjo",
				image_link: "https://images.unsplash.com/photo-1545645741-8a6510b06277?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9uZXNpYSUyMG1hbnxlbnwwfDF8MHx8fDA%3D",
				position: "ketua"
			},
			{
				id: 2,
				name: "kevin agustin",
				image_link: "",
				position: "wakil ketua"
			},
			{
				id: 3,
				name: "wendy celys",
				image_link: "",
				position: "sekretaris"
			},
			{
				id: 4,
				name: "gustian",
				image_link: "",
				position: "bendahara"
			},
		]
	}

	return (
	<div>
		<Intro {...introProps} containerClassName="bg-white" />

		<MemberGrid className="mb-48">
			{
				memberProps.members.map((value) => {
					return (
						<MemberCard {...value}/>
					)
				})
			}
		</MemberGrid>	
	</div>
	);
}
